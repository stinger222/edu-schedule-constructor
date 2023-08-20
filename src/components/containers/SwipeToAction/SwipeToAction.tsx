import { useDrag } from "react-use-gesture"
import { ReactNode, useState } from "react"
import { useSpring, animated } from "@react-spring/web"

import { StyledSwipeToAction } from "./SwipeToAction.styled"
import {SWIPE_BOUND_PROCENTAGE } from "../../../core/constants/constants"
import RemoveActionLabel from "./RemoveActionLabel/RemoveActionLabel"
import { IActionLabelProps } from "../../../core/types/types"

interface ISwipeToActionExtensions {
  RemoveActionLabel: typeof RemoveActionLabel
}

// I've tried, but react just not happy with it ¯\_(ツ)_/¯

// type IProps = {
//   children: ReactNode,
// } & ({
//   onLeftSwipe: () => void,
//   RightActionLabel: () => JSX.Element
// } | {
//   onRightSwipe: () => void,
//   LeftActionLabel: () => JSX.Element
// })

interface IProps {
  children: ReactNode,
  onLeftSwipe?: () => void,
  onRightSwipe?: () => void,
  RightActionLabel?: React.FC<IActionLabelProps>
  LeftActionLabel?: React.FC<IActionLabelProps>
}

const SwipeToAction: React.FC<IProps> & ISwipeToActionExtensions = ({
  children,
  onLeftSwipe,
  onRightSwipe,
  RightActionLabel,
  LeftActionLabel
}) => {
	const [containerRef, setContainerRef] = useState<any>(null)
	const wrapperRef = (node: HTMLDivElement | null) => { setContainerRef(node) }

	const [{ x }, api] = useSpring(() => ({
		from: {
			x: 0, opacity: 1
		},
		config: {
			tension: 300, friction: 25 
		}
	}))
	
	const bind = useDrag(({active, movement, last, _bounds}) => {
		api.start({
			to: {
				x: active ? movement[0]: 0
			}
		})

    // If swiped far enough and released...
    if (last && (movement[0] < 0 && movement[0] < _bounds[0][0] + 2)) onLeftSwipe?.()
    if (last && (movement[0] > 0 && movement[0] > Math.abs(_bounds[0][0]) - 2)) onRightSwipe?.()
    
	}, {
		bounds: { // Prevents swiping if corresponding function is not provided
			left: onLeftSwipe ? -containerRef?.offsetWidth / 100 * SWIPE_BOUND_PROCENTAGE : 0,
      right: onRightSwipe ? containerRef?.offsetWidth / 100 * SWIPE_BOUND_PROCENTAGE : 0
		}, axis: "x"
	})

	return (
		<StyledSwipeToAction className="swipe-action-wrapper" {...bind()} ref={wrapperRef}>
			<animated.div className="animated-wrapper" style={{ x, touchAction: "pan-y" }}>
				{children}
			</animated.div>

			{(onRightSwipe && LeftActionLabel) && 
        <LeftActionLabel className="action-label left-action-label"/>
      }

			{(onLeftSwipe && RightActionLabel) &&
        <RightActionLabel className="action-label right-action-label"/>
      }

		</StyledSwipeToAction>
	)
}

SwipeToAction.RemoveActionLabel = RemoveActionLabel

export default SwipeToAction
