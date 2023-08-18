# mysqlPracticeWithNode

## 체크포인트
1. - [x] mysql 연동
2. - [x] model 작성
3. - [x] model 몇가지 생성
4. - [x] index router, user router, comment router 이해
5. - [x] nunjucks 템플릿 엔진 파악하기
6. - [x] jquery로 ajax 처리해보기




## 학습 정리

1. `mysql -h localhost -u root -p`
```
mysql -h localhost -u root -p는 MySQL 데이터베이스 서버에 접속하기 위한 명령어입니다. 각 부분의 의미는 다음과 같습니다:

mysql: MySQL 클라이언트 프로그램을 실행하는 명령어입니다.
-h localhost: 데이터베이스 서버의 호스트를 지정합니다. 이 경우에는 로컬 호스트를 나타냅니다.
-u root: 데이터베이스에 접속할 사용자를 지정합니다. root는 MySQL에서 기본적으로 생성되는 관리자 계정입니다.
-p: 이 옵션은 비밀번호를 입력하라는 것을 나타냅니다. 명령어를 실행한 후에 비밀번호를 입력할 수 있게 됩니다.
실행 결과로, 이 명령어는 MySQL 서버에 로그인하고 해당 서버의 데이터베이스와 상호작용할 수 있는 인터페이스를 제공합니다.
```

2. mysql 정리

3. `ejs` 템플릿 엔진 이외에도 `pug` 템플릿 엔진이 있다. 둘 다 사용해보자.

4. `express generator`로 손쉽게 초기 프로젝트를 생성할 수 있다.

5. `sequelize.sync()`를 실행하면 서버 실행 시 알아서 MySql과 연동된다.

6. `sequelize`는 DB 작업을 쉽게 할 수 있도록 도와주는 ORM 라이브러리이다. 그렇다면 ORM이란 뭘까? ORM은 자바스크립트 객체와 관계형 DB를 서로 연결해주는 도구이다. ORM을 배워야 sequelize를 훨씬 더 잘 사용할 수 있을태니 학습해야겠다.

7. ORM

https://ooeunz.tistory.com/71

8. nunjucks

9. sequelize에서 1:m 관계에서 on delete가 cascade 되게 하는 방법

```jsx
sequelize를 사용하여 user와 comment 간의 1:n 관계를 설정하고, user를 삭제할 때 연관된 comment도 함께 삭제되도록 하려면 다음과 같이 모델을 작성할 수 있습니다. 아래 코드는 가상의 모델 이름과 필드 이름을 사용한 예시이므로, 실제 프로젝트에서는 적절한 모델 및 필드 이름을 사용하시기 바랍니다.

먼저, User 모델과 Comment 모델을 작성합니다:

// user.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // sequelize 인스턴스 가져오기

const User = sequelize.define('User', {
  // 사용자 모델 필드 정의
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = User;

// comment.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // sequelize 인스턴스 가져오기
const User = require('./user'); // User 모델 가져오기

const Comment = sequelize.define('Comment', {
  // 댓글 모델 필드 정의
  text: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

// User와 Comment 모델 간의 1:n 관계 설정
User.hasMany(Comment, {
  onDelete: 'CASCADE', // User가 삭제될 때 연관된 Comment도 삭제
});
Comment.belongsTo(User);

module.exports = Comment;
위 코드에서 주요한 포인트는 다음과 같습니다:

User 모델과 Comment 모델의 정의에서 sequelize.define을 사용하여 각 모델의 필드를 정의합니다.
User 모델과 Comment 모델 간의 1:n 관계를 설정합니다.
User.hasMany(Comment, { onDelete: 'CASCADE' })를 사용하여 User와 Comment 간의 관계를 설정합니다. onDelete: 'CASCADE' 옵션은 User가 삭제될 때 연관된 Comment도 함께 삭제되도록 설정합니다.
Comment.belongsTo(User)를 사용하여 Comment 모델에 User 모델과의 관계를 설정합니다.
이렇게 모델을 설정하면 User를 삭제할 때 연관된 Comment도 CASCADE 옵션에 따라 함께 삭제됩니다.
```