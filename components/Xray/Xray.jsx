import React, { useMemo, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux';

import { addAnalyser } from '../../actions';

import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { FaNotesMedical } from 'react-icons/fa';
import { Row, Col, Button } from 'react-bootstrap';

import ImageLightbox from './../ImageLightbox';

import "./Xray.css";

const Xray = ({options, image, changeTab}) => {
    // Xray Select
    const animatedComponents = makeAnimated();
    const dispatch = useDispatch();
    const [selectedValue, setSelectedValue] = useState([]);
    const { needRemoveHighlightItem } = useSelector(state => state.analyserBlock);

    useMemo(() => {
        setSelectedValue([...selectedValue.filter(obj => obj.label !== needRemoveHighlightItem.text)]);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[needRemoveHighlightItem]);

    const handleChange = (el) => {
        setSelectedValue([...el])
    }

    const goNextTab = () => {
        if (selectedValue.length) {
            selectedValue.map(value => dispatch(addAnalyser({ text: value.label, id: null })));
        }

        //todo need to change logic
        changeTab(4, 4, true);
    }

    return (
      <React.Fragment>
        <Row className="mb-3">
          <Col>
            <ImageLightbox image={image} roundedCircle className="xrayThumb" />
          </Col>
          <Col/>
        </Row>

        <Select
          closeMenuOnSelect
          components={animatedComponents}
          defaultValue={null}
          value={selectedValue}
          onChange={handleChange}
          isMulti
          options={options}
          menuPortalTarget={document.body}
          styles={{ menuPortal: base => ({ ...base, zIndex: 1 }) }}
        />

        <p className="text-right mt-3">
          <Button variant="success" onClick={goNextTab}>
              <FaNotesMedical className="mr-2" />Complete
          </Button>
        </p>
      </React.Fragment>
    )
}
export default Xray;
