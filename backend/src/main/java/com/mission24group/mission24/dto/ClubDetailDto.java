package com.mission24group.mission24.dto;

import lombok.Data;

@Data
public class ClubDetailDto {
    private String clubName;
    private String content;
    private String phoneNumber;
    private int currentCount;

    public ClubDetailDto(String clubName, String content, String phoneNumber, int currentCount) {
        this.clubName = clubName;
        this.content = content;
        this.phoneNumber = phoneNumber;
        this.currentCount = currentCount;
    }
}
