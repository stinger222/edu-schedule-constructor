import styled from 'styled-components';


export const StyledRingSchedules = styled.div`
	& .schedule_card {
		height: 4em;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0.3em 0.7em;
		border: 1px solid black;
		border-radius: 1em;
		margin-bottom: 0.5em;
	}

	& .schedule_name {
		flex-grow: 1;
		padding-right: 1em;
		text-align: center;
	}

	& .schedule_desc  {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		min-width: 28%;
		align-self: stretch;
		font-size: 0.8em;
		border-left: 0.14em solid black;
		padding-left: 0.8em;
		
	}
	
	& .schedule_desc > div > span:nth-child(2){
		float: right;
		margin-left: 0.3em;
		font-weight: 500;
		word-break: break-all;
	}
`