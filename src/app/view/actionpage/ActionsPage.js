import React,{useState} from 'react';
import './ActionPage.css'

const ActionPage = () => {
    
    const [state,setState] = useState({
        FilterDivShow : false,
        actionData : ["View", "Edit", "Send", "Delete"],
    });

    const listItems = state.actionData.map((item) =>
            <li className= {item == "Delete" && 'deleteItem' } key={item}>{item}</li>
    );

    const onfilterDivChange= (divStatus) =>{
        
        setState(prev=>({
            ...prev,
            filterDivShow : !divStatus
        }));

    }

    return (
        <div className='mainDiv'>
            
        <div>

            <div onClick={ () => { onfilterDivChange(state.filterDivShow) } } className="">
                    <i className='fa fa-filter'></i> More Actions
                            <span className=""> 
                                {state.filterDivShow && 
                                    <i className='fa fa-angle-down animate__animated animate__flipInX'></i>
                                }
                                {!state.filterDivShow &&    
                                    <i className='fa fa-angle-right animate__animated animate__flipInX'></i>
                                }
                            </span>
            </div>

            {state.filterDivShow && 

            <div>

                <ul>
                    {listItems}
                </ul>

            </div>

            }

        </div>

        </div>
    );
};

export default ActionPage;