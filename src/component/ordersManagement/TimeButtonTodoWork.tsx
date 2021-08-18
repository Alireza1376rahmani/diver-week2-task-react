import React from 'react';
import PropTypes from "prop-types";

// import css
import '../../assets/css/ordersManagement/buttonGroup.css';

const TimeButtonTodoWork = (props: any) => {
    const days: string[] = ['2021.8.11', '2021.8.12', '2021.8.13', '2021.8.14'];
    let index = props.index;

    const getActiveClass = (key: number) => {
        if (key === index && index < days.length) {
            return 'active ';
        }
    }

    return (
        <div dir="ltr">
            <div className="button-group">
                {
                    days.map((day, key) => {
                        return <button className={getActiveClass(key)}> {day} </button>
                    })
                }

            </div>
        </div>
    )
}

export default TimeButtonTodoWork;

TimeButtonTodoWork.propTypes = {
    days: PropTypes.array,
    index: PropTypes.number
}