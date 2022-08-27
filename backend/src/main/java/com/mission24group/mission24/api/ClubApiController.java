package com.mission24group.mission24.api;

import com.mission24group.mission24.domain.Club;
import com.mission24group.mission24.dto.ClubDetailDto;
import com.mission24group.mission24.repository.ClubRepository;
import com.mission24group.mission24.service.ClubService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class ClubApiController {

    private final ClubRepository clubRepository;
    private final ClubService clubService;

    @PostMapping("/api/enter")
    public void enter(){
        Club mutsa = clubRepository.findById(1L).orElseThrow(NullPointerException::new);
        clubService.increaseCount(mutsa.getId());
    }

    @PostMapping("/api/out")
    public void out(){
        Club mutsa = clubRepository.findById(1L).orElseThrow(NullPointerException::new);
        clubService.decreaseCount(mutsa.getId());
    }

    @GetMapping("/api/detail")
    public ClubDetailDto detail(){
        Club mutsa = clubRepository.findById(1L).orElseThrow(NullPointerException::new);
        return new ClubDetailDto(mutsa.getClubName(), mutsa.getContent(), mutsa.getPhoneNumber(), mutsa.getCurrentCount());
    }


}
