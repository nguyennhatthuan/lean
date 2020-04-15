import * as React from 'react';

interface Props {
    numberCollection: number[];
    onClickIncreaseButton: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export const NumberViewerComponent: React.FunctionComponent<Props> = (props: Props) => (
    <>
        <h5>Generated numbers collection:</h5>
        <ul>
            {props.numberCollection.map((currentNumber: number) => (
                <li key={currentNumber}>{currentNumber}</li>
            ))}
        </ul>
        <button onClick={props.onClickIncreaseButton}>Nhấn đi đừng sợ</button>
    </>
);