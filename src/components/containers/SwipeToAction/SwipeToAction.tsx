import { useDrag } from "react-use-gesture"
import { ReactNode, useState } from "react"
import { useSpring, animated } from "@react-spring/web"

import { StyledSwipeToAction } from "./SwipeToAction.styled"
import { SWIPE_BOUND_PROCENTAGE } from "../../../core/constants/constants"

interface IProps {
	children: ReactNode,
	onSwipe: () => void,
	confirm?: boolean
}

const SwipeToAction: React.FC<IProps> = ({ children, onSwipe }) => {
	const [containerRef, setContainerRef] = useState<any>(null)
	const wrapperRef = (node: any) => {
		setContainerRef(node)
	}

	const [{x, opacity}, api] = useSpring(() => ({
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
				x: active ? movement[0]: 0,
				opacity: active ? 1 - (movement[0] / _bounds[0][0]) / 1.3 : 1
			}
		})
		
		// if swiped far enough
		if (last && movement[0] < (_bounds[0][0] + 2)) onSwipe()
	}, {
		bounds: {
			left: -containerRef?.offsetWidth / 100 * SWIPE_BOUND_PROCENTAGE, right: 0
		}, axis: "x"
	})

	return (
		<StyledSwipeToAction className="swipe-action-wrapper" {...bind()} ref={wrapperRef}>
			<animated.div className="animated-wrapper" style={{ x, opacity, touchAction: "pan-y" }}>
				{children}
			</animated.div>
			<div className="action-label">Delete?</div>
		</StyledSwipeToAction>
	)
}

export default SwipeToAction
