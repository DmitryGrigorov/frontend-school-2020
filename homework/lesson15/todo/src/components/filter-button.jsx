import React, {Component} from 'react';

class FilterButtons extends Component {
  render() {
    const {changeFilterType} = this.props;

    return(
      <div>
        <button data-type="all" onClick={changeFilterType}>Все</button>
        <button data-type="active" onClick={changeFilterType}>Активные</button>
        <button data-type="checked" onClick={changeFilterType}>Выполненные</button>
      </div>
    )
  }
}

export default FilterButtons;