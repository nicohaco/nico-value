'use strict';

const period = [
  {
    title: '毎時',
    key: 'hourly'
  },
  {
    title: '24時間',
    key: 'daily'
  },
  {
    title: '週間',
    key: 'weekly'
  },
  {
    title: '月間',
    key: 'monthly'
  },
  {
    title: '合計',
    key: 'total'
  }
];

const target = [
  {
    title: '総合',
    key: 'total'
  },
  {
    title: '再生',
    key: 'view'
  },
  {
    title: 'コメント',
    key: 'res'
  },
  {
    title: 'マイリスト',
    key: 'mylist'
  }
];

module.exports = {
  period,
  target
};
