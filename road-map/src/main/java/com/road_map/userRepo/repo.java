package com.road_map.userRepo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.road_map.userEntity.User;

@Repository
public interface repo extends JpaRepository<User, Long>{
	User findByEmail(String email);
}
