import React from "react";
import Input from '@material-ui/core/Input';
import styles from './InputItem.module.css'
import Button from '@material-ui/core/Button';

class InputItem extends React.Component {
    state = {
        value: '',
        buttonEnabled: false

    };

    switchButton = (event) =>
        this.setState({
            value: event.target.value.toUpperCase(),
            buttonEnabled: event.target.value.length > 0
        });



    render () {
        const { onClickAdd } = this.props;
        return (<div className={styles.wrap} >
            <Input
                className={styles.input}
                id="standard-with-placeholder"
                label="Добавить задачу"
                placeholder="Введите планируемое дело здесь"
                fullWidth
                value={this.state.value}
                onChange={ this.switchButton }
            />
            <Button
                disabled={!this.state.buttonEnabled}
                variant="contained"
                color="primary"
                fullWidth
                onClick={() => {
                    if (this.state.value !== '') {
                        onClickAdd(this.state.value);
                        this.setState({ value: '',
                            buttonEnabled: false
                        })}
                    }
                }
            >
                Добавить
            </Button>
        </div>)
    }
}



export default InputItem



