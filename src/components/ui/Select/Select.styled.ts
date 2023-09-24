import { Select as MantineSelect } from "@mantine/core"
import styled from "styled-components"
import { ThemeEnum } from "../../../core/types/styled"

export const StyledSelect = styled(MantineSelect)`
		margin-bottom: 0.3em;

		& .mantine-Select-label {
			font-weight: 200;
      font-size: 1em;
			margin-left: 0.4em;
			color: ${({theme}) => theme.select.text.label};
		}

		& .mantine-Select-input {
			min-height: 0;
      height: 2em;
		}

		& .mantine-Input-input {
			padding: 0.85em 1.1em 0.85em 0.5em;
			
			background: ${({theme}) => theme.select.background};
			border: 0.082em solid ${({theme}) => theme.select.border};
			border-radius: 0.4em;
			
			font-size: 1em;
			font-family: 'JetBrains Mono', 'Segoe UI', 'Arial', 'Tahoma', 'Verdana', 'Arial Narrow', sans-serif;
      font-weight: 300;
			color: ${({theme}) => theme.select.text.input};
		}
    
		& .mantine-Input-input::placeholder {
			color: ${({theme}) => theme.text.secondary}; 
		}

		& .mantine-Input-rightSection {
			width: 2em;
		}

		& .mantine-Input-rightSection svg {
			height: 1.3em;
			width: 1.3em;
		}

		& .mantine-Select-dropdown {
			background: ${({theme}) => theme.select.dropdown.background};
			border: 0.01em solid ${({theme}) => theme.select.dropdown.border};
      border-radius: 0.4em;
      padding-inline: 0.1em;
		}
		
		& .mantine-Select-dropdown .mantine-Select-item {
			font-weight: 200;
      font-size: 0.9em;
      border-radius: 0.3em;
		}
		
		& .mantine-Select-dropdown .mantine-Select-item:nth-child(2n+1) {
			filter: brightness(1.15);
      margin-block: 0.15em;
		}
    
		& .mantine-Select-dropdown .mantine-Select-item{
			background: ${({theme}) => theme.select.dropdown.item};
			color: ${({theme}) => theme.type === ThemeEnum.dark ? "#FFFFFF" : "#000000"}
		}

		& .mantine-Select-dropdown .mantine-Select-item:hover {
			filter: brightness(${({theme}) => theme.type === ThemeEnum.dark ? 1.2 : 0.92});
		}

		& .mantine-Select-dropdown .mantine-Select-item[data-selected="true"] {
			background: ${({theme}) => theme.select.dropdown.activeItem};
			color: "#FFFFFF";
		}

		& .mantine-Select-dropdown .mantine-ScrollArea-scrollbar:hover {
			background-color: transparent;
		}
	`
