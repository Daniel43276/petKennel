import React from 'react';
import fallbackImg from './assets/react.svg';

class ChildComponent extends React.Component {
  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick() {
    const { id, onAction } = this.props;
    if (onAction) onAction(id);
  }

  handleImageError = (e) => {
    e.target.src = fallbackImg;
  }

  render() {
    const { name, image, status, buttonText = 'Update' } = this.props;

    return (
      <div className="child-card" style={{ border: '1px solid #ccc', padding: '12px', width: '220px', textAlign: 'center', borderRadius: '8px' }}>
        <h2 style={{ margin: '8px 0' }}>{name}</h2>
        <img src={image} alt={name} onError={this.handleImageError} style={{ width: '100%', height: 'auto', borderRadius: '4px' }} />
        <button
          className="ui basic blue button"
          onClick={this.handleButtonClick}
          style={{ marginTop: '10px', padding: '8px 12px', cursor: 'pointer' }}
        >
          {buttonText}
        </button>
      </div>
    );
  }
}

export default ChildComponent;
