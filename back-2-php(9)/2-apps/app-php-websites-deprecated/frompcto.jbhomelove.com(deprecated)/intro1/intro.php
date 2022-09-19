<?php require('../lib/top.php'); ?>

<!-- 점보트론 영역 스타일 -->
<style type="text/css">
  .jumbotron {
    background-image: url('../images/jumbotron.jpg');
    background-size: cover;
    text-shadow: black 0.2em 0.2em 0.2em;
    color:white;
  }
</style>

    <div class="container">
      <div class="jumbotron">
        <h1 class="text-center">From.PC.To</h1>
        <p class="text-center">당신의 코딩학습, 당신의 PC에서부터</p>
        <p class="text-center"><a class="btn btn-primary btn-lg" href="../lecture1/bbs.php" role="button">강의듣기</a></p>
        <p class="text-center"><a class="btn btn-danger btn-lg" href="http://from.pc.to" role="button">한국어</a></p>
        <p class="text-center"><a class="btn btn-warning btn-lg" href="http://fromj.pc.to" role="button">日本語</a></p>
      </div>
      <div class="row">
        <div class="col-md-4">
          <h4>프롬PC투의 특징</h4>
          <p>프롬PC투는 누구라도 쉽게 외국어, JAVA, PHP등의 코딩을 처음 시작하기에 최적의 강의 사이트입니다.</p>
          <p><a class="btn btn-default" data-target="#modal1" data-toggle="modal">자세히 알아보기</a></p>
        </div>
        <div class="col-md-4">
          <h4>열심히 하는 강사진</h4>
          <p>프롬PC투는 정말로 같이공부해나가는 강사진이있습니다. 각각의 강사진은 분야를 나눠서 같이 공부하면서 알려줍니다.  </p>
          <p><a class="btn btn-default" href="../intro1/teacher.php">자세히 알아보기</a></p>
        </div>
        <div class="col-md-4">
          <h4>즐거운 강의</h4>
          <p>강의는 들으면 이해가 되는 재밌는 강의를 다룹니다. 강의를 듣는 시간 내내 공부가 아니고 하나의 취미를 만들수 있는 경험을 하실 수 있습니다.</p>
          <p><a class="btn btn-default" href="../lecture1/bbs.php">무료 강의 체험</a></p>
        </div>
      </div>
      <hr>
      <div class="panel panel-primary">
        <div class="panel-heading">
          <h3 class="panel-title"><span class="glyphicon glyphicon-pencil"></span>
            &nbsp;&nbsp;최신 강의 목록</h3>
        </div>
        <div class="panel-body">

          <div class="media">
            <div class="media-left">
              <a href="../lecture1/bbs.php"><img class="media-object" src="../images/america.png" alt="미국국기 이미지" style="width: 100px;"></a>
            </div>
            <div class="media-body">
              <h4 class="media-heading"><a href="../lecture1/bbs.php">[외국어]왕초보 회화/독해 영문법</a> <span class="badge">New</span></h4>
              프로그래머의 필수 덕목중 하나인 영어 실력!<br>
              구글 검색을 통해 디버그를 하려해도, 영어가 읽히지 않아서, 번역이 엉망이라서 진도를 나갈 수 없다고요?<br>
              지금 여기, 3시간만에 끝내는 특별 영문법 강좌가 있습니다.<br>
              해외진출을 노리는 웹PG나 최신동향의 영자뉴스 IT소식을 읽는 방법을 터득하고 싶어하는 분들에게 필요합니다.<br>
              핵심만을 압축한 3시간 코스를 파트별로 무려 52강으로 분할해 지루함을 느낄 새 없습니다!
            </div>
          </div>
          <hr>

          <div class="media">
            <div class="media-left">
              <a href="../lecture2/bbs.php"><img class="media-object" src="../images/php.png" alt="php강의 이미지" style="width: 100px;"></a>
            </div>
            <div class="media-body">
              <h4 class="media-heading"><a href="../lecture2/bbs.php">[코딩]PHP/MySQL 무작정 따라하기</a> <span class="badge">New</span></h4>
              PHP 언어 강의는 홈페이지메이킹 코드 워크플로우 강의입니다. 처음 웹프로그래밍을 접하는 분들에게 적합한 강의입니다.<br>
              MySQL DB 운용법, 부트스트랩4 사용법, PHP 무료 웹호스팅 사용법 등이 포함되어 있습니다.<br>
              강의료는 무료이며 강좌는 총 26강으로 되어 있습니다.
            </div>
          </div>
          <hr>

          <div class="media">
            <div class="media-left">
              <a href="../lecture3/bbs.php"><img class="media-object" src="../images/java.png" alt="java강의 이미지" style="width: 100px;"></a>
            </div>
            <div class="media-body">
              <h4 class="media-heading"><a href="../lecture3/bbs.php">[코딩]Java/Oracle 무작정 따라하기</a> <span class="badge">New</span></h4>
              Java 언어 강의는 Spring Framework 기반으로 MVC 패턴에 대한 설명,<br>
              Junit4을 이용한 테스트, Oracle 11g DB 설치, Mybatis 연동하여 Mapper를 통한 쿼리 운용법,<br>
              모델, 뷰, 컨트롤러의 구조를 다루는 법과 동시에 게시판 및 블로그 만들기 실전 코스가 포함됩니다.<br>
              웹PG 초중급자에게 적합한 코스로, 강의료는 단돈 천원이며 핵심만을 압축하여 총 5강으로 구성되어 있습니다.
            </div>
          </div>

        </div>
      </div>
    </div>

    <!-- Modal1 호출시 -->
    <div class="row">
      <div class="modal" id="modal1" tabindex="-1">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              프롬PC투의 특징
              <button class="close" data-dismiss="modal">&times;</button>
            </div>
            <div class="modal-body" style="text-aling: center;">
              저희 서비스는 youtube를 연동하여 서비스를 진행하고 있습니다.<br>
              이에 빠른 강의 출력이 가능합니다.<br><br>
              <img src="../images/youtube.png" id="imagepreview" style="width: 100px;">
            </div>
          </div>
        </div>
      </div>
    </div>

<?php require('../lib/bottom.php'); ?>
