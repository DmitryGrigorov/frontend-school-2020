import React, {Component} from 'react';

class ItemFilter extends Component {

  render() {
    const {changeDisplayType} = this.props;
    return(
      <div className="items-filter">
        <span><a href="#" data-value="all" onClick={changeDisplayType}>Все</a></span>
        <span><a href="#" data-value="undone" onClick={changeDisplayType}>Открытые</a></span>
        <span><a href="#" data-value="done" onClick={changeDisplayType}>Закрытые</a></span>
      </div>
    );
  }
}

export default ItemFilter;