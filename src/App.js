import React, {useState} from 'react'
import './index.css';


function App() {
    const [result, setValue] = useState('');

    const del = () => {
        setValue(result.slice(0, result.length -1))
    };

    return (
        <div className="container">
            <div className="calculator">
                <form action="">
                    <div>
                        <input className="txt" type="text" value={result}/>
                    </div>
                    <div>
                        <input type="button" value="C" onClick={e => setValue('')}/>
                        <input type="button" value="DE" id="delete" onClick={del}/>
                        <input type="button" value="." onClick={e => setValue(result + e.target.value)}/>
                        <input type="button" value="/" onClick={e => setValue(result + e.target.value)}/>
                    </div>
                    <div>
                        <input type="button" value="7" onClick={e => setValue(result + e.target.value)}/>
                        <input type="button" value="8" onClick={e => setValue(result + e.target.value)}/>
                        <input type="button" value="9" onClick={e => setValue(result + e.target.value)}/>
                        <input type="button" value="*" onClick={e => setValue(result + e.target.value)}/>
                    </div>
                    <div>
                        <input type="button" value="4" onClick={e => setValue(result + e.target.value)}/>
                        <input type="button" value="5" onClick={e => setValue(result + e.target.value)}/>
                        <input type="button" value="6" onClick={e => setValue(result + e.target.value)}/>
                        <input type="button" value="-" onClick={e => setValue(result + e.target.value)}/>
                    </div>
                    <div>
                        <input type="button" value="1" onClick={e => setValue(result + e.target.value)}/>
                        <input type="button" value="2" onClick={e => setValue(result + e.target.value)}/>
                        <input type="button" value="3" onClick={e => setValue(result + e.target.value)}/>
                        <input type="button" value="+" onClick={e => setValue(result + e.target.value)}/>
                    </div>
                    <div>
                        <input type="button" value="00" onClick={e => setValue(result + e.target.value)}/>
                        <input type="button" value="0" onClick={e => setValue(result + e.target.value)}/>
                        <input className="equal" type="button" value="=" onClick={e => setValue(eval(result))}/>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default App;
