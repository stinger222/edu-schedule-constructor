import { Select } from "@mantine/core"
import styled from "styled-components"

export const StyledSelect = styled(Select)`
		margin-bottom: 0.3em;

		& .mantine-Select-label {
			margin-left: 0.4em;
			font-weight: 200;
		}

		& .mantine-Input-input {
			padding: 0.85em 0.5em;
			border-radius: 0.4em;
			border: 0.05em solid black;
			font-size: 1.2em;
			font-family: 'JetBrains Mono', 'Segoe UI', Arial, Tahoma, 'Verdana', 'Arial Narrow', sans-serif;
		}

		& .mantine-Input-rightSection {
			right: 0.3em;
		}
	`

