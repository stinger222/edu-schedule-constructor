import { forwardRef } from "react"
import { SelectItem, SelectProps } from "@mantine/core"
import { FieldValues, RegisterOptions, useController, useFormContext } from "react-hook-form"
import { StyledSelect } from "../../ui/Select/Select.styled"
import { useTranslation } from "react-i18next"

interface MySelectItem extends SelectItem {
	label: string
}

interface IProps {
	data: (string | MySelectItem)[],
	name: string,
	rules?: Omit<RegisterOptions<FieldValues, string>, "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled">
}

/**
 * This is container for Select component from mantine library.
 * 
 * As all other containers, it can be used ONLY inside FormProvider.
 * 
 * @param name - name for "@react-hook-form" that used for registration
 * @param data - data to show in dropdown
*/

const SelectContainer: React.FC<IProps & SelectProps> = forwardRef(({ name, rules, data, ...rest}, ref) => {

  const { t } = useTranslation()
	const methods = useFormContext()

	const {field: {ref: _, ...selectProps}} = useController({
		name,
		control: methods.control,
		rules
	})

	return (
    <StyledSelect
      size="1em"
			data={data}
			placeholder={data.length === 0 ? t("select.emptyPlaceholder") : rest.placeholder ?? t("select.notSelectedPlaceholder")}
			{...selectProps}
			{...rest}
		/>
	)
})

export default SelectContainer
