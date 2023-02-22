import React from 'react';
import { Button, Modal} from "react-bootstrap";


function ProjectsModal({show, handleClose, project}) {
    console.log("modal:", show)
    return ( 
        <Modal show={show} onHide={handleClose} className="modal center">
            <Modal.Header id="modal-header">
                <Modal.Title>
                   <b id="modal-title" style={{fontSize: "2em"}}>{project.name}</b>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body id="modal-content">
                    <img id="modal-image" src={project.image} alt={project.imgAlt} />
                    <p style={{fontSize: "1.5em"}}>{project.description}</p>
            </Modal.Body>
            <Modal.Footer id="modal-footer">
                <a href={project.demoLink}><Button className='button'>Demo</Button></a>
                <a href={project.webLink}><Button className='button'>Application</Button></a>
                <Button onClick={handleClose} className='button'>Close</Button>
            </Modal.Footer>
        </Modal>
     );
}

export default ProjectsModal;