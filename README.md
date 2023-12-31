# mysqlPracticeWithNode

## 체크포인트
1. - [x] mysql 연동
2. - [x] model 작성
3. - [x] model 몇가지 생성
4. - [x] index router, user router, comment router 이해
5. - [x] nunjucks 템플릿 엔진 파악하기
6. - [x] jquery로 ajax 처리해보기
7. - [x] sequelize로 기존에 존재하는 table 수정해보기(migration으로 user 테이블에 company_id 외래키 추가함)
8. - [x] 새로운 테이블로 ajax 기능 더 추가해서 사용해보기(company get api, post api 사용해봤음)




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

https://inpa.tistory.com/category/DBMS/MySQL
지금은 다 보기엔 분량이 방대해서, 필요한 내용만 그때그때 찾아봐야겠다.

3. `ejs` 템플릿 엔진 이외에도 `pug` 템플릿 엔진이 있다. 둘 다 사용해보자.

4. `express generator`로 손쉽게 초기 프로젝트를 생성할 수 있다.

5. `sequelize.sync()`를 실행하면 서버 실행 시 알아서 MySql과 연동된다.

6. `sequelize`는 DB 작업을 쉽게 할 수 있도록 도와주는 ORM 라이브러리이다. 그렇다면 ORM이란 뭘까? ORM은 자바스크립트 객체와 관계형 DB를 서로 연결해주는 도구이다. ORM을 배워야 sequelize를 훨씬 더 잘 사용할 수 있을태니 학습해야겠다.

7. ORM

https://ooeunz.tistory.com/71

8. nunjucks

https://inpa.tistory.com/entry/Nunjucks-%F0%9F%93%9A-%EB%84%8C%EC%A0%81%EC%8A%A4-%EB%AC%B8%EB%B2%95-%EC%A0%95%EB%A6%AC
기본적으로 ejs와 비슷한 것 같다. 정리해놓고 사용해봐야겠다.

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

10. sequelize로 table을 수정하고싶다? migration 기능 이용

https://choice91.tistory.com/164

`users table에 compaies를 외래키로 갖는 column 새로 생성해서 db 수정하기`

당신이 설명한 상황에 따라 Sequelize 마이그레이션을 사용하여 User 모델에 Company의 id를 참조하는 새로운 foreign key column을 추가할 수 있습니다. 아래는 이 작업을 수행하는 예제 코드입니다:

먼저, Sequelize 마이그레이션 파일을 생성합니다. 마이그레이션 파일은 데이터베이스 스키마 변경을 추적하고 적용하는 데 사용됩니다.

npx sequelize-cli migration:generate --name add-company-id-to-user
위 명령을 실행하면 새로운 마이그레이션 파일이 생성됩니다.

생성된 마이그레이션 파일(XXXXXXXXXXXXXX-add-company-id-to-user.js)을 열어서 아래와 같이 수정합니다:

```jsx
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Users', 'CompanyId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Companies', // 참조할 모델의 이름
        key: 'id' // 참조할 컬럼의 이름
      },
      onUpdate: 'CASCADE', // 부모 레코드가 업데이트되면 자식 레코드도 업데이트됨
      onDelete: 'SET NULL' // 부모 레코드가 삭제되면 자식 레코드의 컬럼 값은 NULL이 됨
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Users', 'CompanyId');
  }
};
```

생성한 마이그레이션 파일을 실행하여 데이터베이스에 변경을 적용합니다.

`npx sequelize-cli db:migrate`

위 명령을 실행하면 마이그레이션이 수행되고 User 모델에 CompanyId라는 새로운 foreign key column이 추가됩니다.

이제 User 모델과 Company 모델 간의 관계를 설정하고 사용할 수 있게 되었습니다. 필요에 따라 관계 정의와 모델 파일도 수정하여 사용하면 됩니다.

테이블 생성 내용을 참조하니깐 다음의 내용이 나왔다.

```jsx
 KEY `users_company_id_foreign_idx` (`company_id`),
  CONSTRAINT `users_company_id_foreign_idx` FOREIGN KEY (`company_id`) REFERENCES `companies` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
```
이것의 의미가 무엇일까?

```jsx
위의 코드 조각은 데이터베이스 스키마 정의에서 외래 키(Foreign Key) 제약 조건을 나타냅니다. 이 코드는 데이터베이스 테이블 간의 관계를 정의하고, 이 관계를 통해 데이터 무결성을 유지하며 데이터 조작을 제한하는 역할을 합니다.

여기서 주요한 구성 요소와 의미는 다음과 같습니다:

KEY users_company_id_foreign_idx: 이 부분은 외래 키 인덱스의 이름을 나타냅니다. 인덱스는 데이터베이스에서 검색 성능을 향상시키기 위해 사용되는 구조입니다.

(`company_id`): 이 부분은 외래 키로 사용되는 컬럼의 이름을 나타냅니다. 여기서는 company_id 컬럼이 외래 키로 사용됩니다.

CONSTRAINT users_company_id_foreign_idx: 이 부분은 외래 키 제약 조건의 이름을 나타냅니다. 제약 조건은 데이터 무결성을 유지하기 위해 정의됩니다.

FOREIGN KEY (company_id) REFERENCES companies (id): 이 부분은 외래 키의 참조 관계를 정의합니다. company_id 컬럼은 companies 테이블의 id 컬럼을 참조하게 됩니다. 즉, users 테이블의 company_id 컬럼 값은 companies 테이블의 id 값을 참조하게 됩니다.

ON DELETE SET NULL: 이 부분은 부모 레코드가 삭제되었을 때 자식 레코드의 외래 키 값을 NULL로 설정하도록 지정하는 것을 나타냅니다. 즉, 부모 레코드가 삭제되면 해당 사용자 레코드의 company_id 컬럼 값이 NULL로 설정됩니다.

ON UPDATE CASCADE: 이 부분은 부모 레코드의 기본 키 값이 업데이트되면, 자식 레코드의 외래 키 값을 자동으로 업데이트하도록 지정하는 것을 나타냅니다. 즉, 부모 레코드의 id 값이 변경되면 해당 사용자 레코드의 company_id 값도 업데이트됩니다.

이 외래 키 제약 조건은 데이터 무결성을 유지하고 데이터베이스의 무결성과 일관성을 보장하기 위해 사용됩니다.
```

`sequelize migration:create --name <filename>`

`sequelize db:migrate`

11. findById = findByPK

