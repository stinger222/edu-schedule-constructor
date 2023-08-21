import { Select as MantineSelect } from "@mantine/core"
import styled from "styled-components"
import { ThemeEnum } from "../../../core/types/styled"

export const StyledSelect = styled(MantineSelect)`
		margin-bottom: 0.3em;

		& .mantine-Select-label {
			font-weight: 200;
			margin-left: 0.4em;
			color: ${({theme}) => theme.text.primary};
		}

		& .mantine-Input-input {
			padding: 0.85em 1.1em 0.85em 0.5em;
			
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
			width: 2em;
		}

		& .mantine-Input-rightSection svg {
			height: 1.3em;
			width: 1.3em;
		}

		& .mantine-Select-dropdown {
			background: ${({theme}) => theme.backgrounds.primary};
		}
		
		& .mantine-Select-dropdown .mantine-Select-item {
			font-weight: 200;
		}
		
		& .mantine-Select-dropdown .mantine-Select-item:nth-child(2n+1) {
			filter: brightness(0.95);
      margin-block: 0.15em;
		}
    
		& .mantine-Select-dropdown .mantine-Select-item:not(
			& .mantine-Select-dropdown .mantine-Select-item[data-selected="true"]
		) {
			background: ${({theme}) => theme.backgrounds.primary};
			color: ${({theme}) => theme.type === ThemeEnum.dark ? "#FFFFFF" : "#000000"}
		}

		& .mantine-Select-dropdown .mantine-Select-item:hover {
			background: ${({theme}) => theme.backgrounds.primary};
			filter: brightness(${({theme}) => theme.type === ThemeEnum.dark ? 1.2 : 0.92});
		}

		& .mantine-Select-dropdown .mantine-Select-item[data-selected="true"] {
			background: ${({theme}) => theme.colors.primary}CC;
			color: "#FFFFFF";
		}

		& .mantine-Select-dropdown .mantine-ScrollArea-scrollbar:hover {
			background-color: transparent;
		}
	`
