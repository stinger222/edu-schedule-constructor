import { Select } from "@mantine/core"
import styled from "styled-components"
import { ThemeEnum } from "../../../core/types/styled"

export const StyledSelect = styled(Select)`
		margin-bottom: 0.3em;

		& .mantine-Select-label {
			font-weight: 200;
			margin-left: 0.4em;
			color: ${({theme}) => theme.text.primary};
		}

		& .mantine-Input-input {
			padding: 0.85em 0.5em;
			
			background: ${({theme}) => theme.backgrounds.secondary};
			border: 0.05em solid ${({theme}) => theme.colors.secondary};
			border-radius: 0.4em;
			
			font-size: 1.2em;
			font-family: 'JetBrains Mono', 'Segoe UI', 'Arial', 'Tahoma', 'Verdana', 'Arial Narrow', sans-serif;
			color: ${({theme}) => theme.text.primary};
		}

		& .mantine-Input-input::placeholder {
			color: ${({theme}) => theme.text.secondary}; 
		}

		& .mantine-Input-rightSection {
			right: 0.3em;
		}

		& .mantine-Select-dropdown {
			background: ${({theme}) => theme.backgrounds.primary};
		}

		& .mantine-Select-dropdown .mantine-Select-item {
			font-weight: 200;
		}
		
		& .mantine-Select-dropdown .mantine-Select-item:not(
			& .mantine-Select-dropdown .mantine-Select-item[data-selected="true"]
		) {
			background: ${({theme}) => theme.backgrounds.primary};
			color: ${({theme}) => theme.type === ThemeEnum.dark ? '#FFFFFF' : '#000000'}
		}

		& .mantine-Select-dropdown .mantine-Select-item:hover {
			background: ${({theme}) => theme.backgrounds.primary};
			filter: brightness(${({theme}) => theme.type === ThemeEnum.dark ? 1.2 : 0.95});
		}

		& .mantine-Select-dropdown .mantine-Select-item[data-selected="true"] {
			background:  ${({theme}) => theme.colors.primary}CC;
			color: "#FFFFFF";
		}

		& .mantine-Select-dropdown .mantine-ScrollArea-scrollbar:hover {
			background-color: transparent;
		}
	`
