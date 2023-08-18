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
mysql -h localhost -u root -p는 MySQL 데이터베이스 서버에 접속하기 위한 명령어입니다. 각 부분의 의미는 다음과 같습니다:

mysql: MySQL 클라이언트 프로그램을 실행하는 명령어입니다.
-h localhost: 데이터베이스 서버의 호스트를 지정합니다. 이 경우에는 로컬 호스트를 나타냅니다.
-u root: 데이터베이스에 접속할 사용자를 지정합니다. root는 MySQL에서 기본적으로 생성되는 관리자 계정입니다.
-p: 이 옵션은 비밀번호를 입력하라는 것을 나타냅니다. 명령어를 실행한 후에 비밀번호를 입력할 수 있게 됩니다.
실행 결과로, 이 명령어는 MySQL 서버에 로그인하고 해당 서버의 데이터베이스와 상호작용할 수 있는 인터페이스를 제공합니다.

2. `CREATE SCHEMA <name>`
선택된 db 서버에 새로운 데이터베이스를 만든다.

3. `SHOW DATABASES`
데이터베이스 목록들을 출력한다.

4. `USE <name>`
데이터베이스를 name으로 사용한다.

5. `ejs` 템플릿 엔진 이외에도 `pug` 템플릿 엔진이 있다. 둘 다 사용해보자.

6. `express generator`로 손쉽게 초기 프로젝트를 생성할 수 있다.

7. `sequelize.sync()`를 실행하면 서버 실행 시 알아서 MySql과 연동된다.

8. `sequelize`는 DB 작업을 쉽게 할 수 있도록 도와주는 ORM 라이브러리이다. 그렇다면 ORM이란 뭘까? ORM은 자바스크립트 객체와 관계형 DB를 서로 연결해주는 도구이다. ORM을 배워야 sequelize를 훨씬 더 잘 사용할 수 있을태니 학습해야겠다.

9. ORM

https://ooeunz.tistory.com/71

10. nunjucks

