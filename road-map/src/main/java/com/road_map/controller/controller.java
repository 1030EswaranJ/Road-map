package com.road_map.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.road_map.userEntity.User;
import com.road_map.userRepo.repo;

@RestController
@CrossOrigin(origins = "http://127.0.0.1:5500")
public class controller {
	
	@Autowired
	private repo repos;
	
	@PostMapping("/createUser")
	public String postUserData(@RequestBody User obj){
		try {
			User users = new User();
			users.setUsername(obj.getUsername());
			users.setEmail(obj.getEmail());
			users.setPassword(obj.getPassword());
			repos.save(users);
			return "USER REGITERED SUCCESS FULLY";
		} catch (Exception e) {
			return "USER NOT REGITERED :"+e.getMessage();
		}
	}
	
	@PostMapping("/login")
	public String getUserData(@RequestBody User obj) {
	    try {
	        User users = repos.findByEmail(obj.getEmail());

	        if (users == null) {
	            return "USER NOT FOUND";
	        }

	        if (obj.getPassword().equals(users.getPassword())) {
	            return "USER LOGIN SUCCESSFULLY";
	        }

	        return "INVALID PASSWORD";
	    } catch (Exception e) {
	        return "USER NOT LOGIN: " + e.getMessage();
	    } 
	}
}
	