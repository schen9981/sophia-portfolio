import React from 'react';
import './ProjectModal.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

type ProjectModalProps = {
  show: boolean;
  onHide: () => void;
  projectName: string;
  projectDescription: string[];
  projectLibs: string;
};

type ProjectModalState = {
};

export default class ProjectModal extends React.Component<ProjectModalProps, ProjectModalState> {
  constructor(props: ProjectModalProps) {
    super(props);
    this.state = {
    };
  }

  render() {
    let link;
    if (this.props.projectDescription[2].length == 0) {
      link = <p> code available upon request </p>;
    } else {
      link = <a href={this.props.projectDescription[2]} target="_blank"> more info </a>;
    }
    return (
      <Modal
      {...this.props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <h3>{this.props.projectName}</h3>
            <h5>{this.props.projectLibs}</h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            {this.props.projectDescription[0]}
          </p>
          <p>
            {this.props.projectDescription[1]}
          </p>
          {link}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>

    );
  }

}
