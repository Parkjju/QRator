package com.mission24group.mission24.domain;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter @Setter
@NoArgsConstructor
@Table(name = "club")
public class Club {
    @Id
    @GeneratedValue
    private Long id;
    private String clubName;
    private String content;
    private String phoneNumber;
    private int currentCount;

    public Club(String clubName, int count, String phoneNumber, String content) {
        this.clubName = clubName;
        this.currentCount = count;
        this.phoneNumber = phoneNumber;
        this.content = content;
    }

    @OneToMany(mappedBy = "club")
    private List<User> users = new ArrayList<>();


}
