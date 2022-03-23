import React, { useState } from 'react';
import { makeStyles, Theme} from "@material-ui/core/styles";
import { Card } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
    itemContainer: {
        margin: theme.spacing(1),
    },
    itemImage: {
        padding: theme.spacing(0, 1),
        backgroundSize: "auto 100%",
    },
    secondContainer: {
        display: "flex",
        alignItems: "center",
        padding: theme.spacing(1, 0),
        justifyContent: "space-around",
    },
    quantityField: {
        marginTop: theme.spacing(1),
        width: 60,
    },
}));

function InputSample(){
    const [text, setText] = useState<string>('');

    const onChange = (e : any) => {
        setText(e.target.value);
    };

    const onReset = () => {
        setText('');
    };

    return (
        <div>
            <input onChange={onChange} value={text} />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: {text}</b>
            </div>
            <Card></Card>
        </div>
    );
}

export default InputSample;