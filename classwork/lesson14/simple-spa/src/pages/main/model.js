class Model {
  _data = {
    list: [
      {
        id: '1',
        title: 'PC'
      },
      {
        id: '2',
        title: 'TV'
      },
      {
        id: '3',
        title: 'Phone'
      }
    ]
  };
  _follower = [];

  subscribe(followerCallback) {
    this._follower.push(followerCallback);
  }

  set data(content) {
    this._data = content;

    this._follower.forEach(function(followerCallback) {
      followerCallback();
    })
  }

  get data() {
    return this._data;
  }
}

export default new Model();
