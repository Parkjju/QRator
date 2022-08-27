package com.mission24group.mission24.service;

import com.mission24group.mission24.domain.Club;
import com.mission24group.mission24.repository.ClubRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class ClubService {
    private final ClubRepository clubRepository;

    @Transactional
    public void increaseCount(Long id){
        Club club = clubRepository.findById(1L).orElseThrow(NullPointerException::new);
        club.setCurrentCount(club.getCurrentCount() + 1);
    }

    @Transactional
    public void decreaseCount(Long id){
        Club club = clubRepository.findById(1L).orElseThrow(NullPointerException::new);
        club.setCurrentCount(club.getCurrentCount() - 1);
    }
}
