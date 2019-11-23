import * as React from 'react';

interface Props {
    numberCollection: number[];
}

export const NumberViewerComponent: React.FunctionComponent<Props> = (props: any) => (
    <>
        <h5>Generated numbers collection:</h5>
        <ul>
            {props.numberCollection.map((currentNumber: number) => (
                <li key={currentNumber}>{currentNumber}</li>
            ))}
        </ul>
    </>
);