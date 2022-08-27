 package com.mission24group.mission24;


 import com.mission24group.mission24.domain.Club;
 import com.mission24group.mission24.repository.ClubRepository;
 import com.mission24group.mission24.repository.UserRepository;
 import org.junit.jupiter.api.Test;
 import org.springframework.beans.factory.annotation.Autowired;
 import org.springframework.boot.test.context.SpringBootTest;
 import org.springframework.test.annotation.Rollback;
 import org.springframework.transaction.annotation.Transactional;

 @SpringBootTest
 @Transactional
 class Mission24ApplicationTests {
	@Autowired
	UserRepository userRepository;
	@Autowired
	ClubRepository clubRepository;
	@Test
	@Rollback(value = false)
	void contextLoads() {
		Club club = new Club("멋쟁이 사자처럼", 0, "010-1234-5678", "내 아이디어를 내 손으로 실현한다, HACK YOUR LIFE! 멋쟁이사자처럼 대학은 온라인 기반의 강의와 오프 라인 활동이 함께 이루어지는 코딩 교육 동아리입니다. 이를 통해 컴퓨터를 모르는 학생들이 프로그래밍 교육을 통해 원하는 IT서비스를 직접 런칭합니다.");
		clubRepository.save(club);
	}
}
