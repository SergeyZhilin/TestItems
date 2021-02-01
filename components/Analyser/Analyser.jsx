import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import Badge from 'react-bootstrap/Badge'
import { FaWindowClose } from 'react-icons/all';

import { removeCurrentAnalyser } from '../../actions';

import './index.scss';

const Analyser = () => {

    const dispatch = useDispatch();
    const { analyser: items } = useSelector(state => state.analyserBlock);

    const removeEl = (text, id) => {
        dispatch(removeCurrentAnalyser({ text, id }));
    }

    return (
      <Fragment>
        {
            items.map((item, index) => (
                <Badge key={index} variant="purple" className="p-2 mr-2 mb-3 position-relative Analyser" pill>
                    {item.text}
                    <FaWindowClose className="remove-analyser" onClick={() => removeEl(item.text, item.id)} />
                </Badge>
            ))
        }
      </Fragment>
    )
}
export default Analyser;
