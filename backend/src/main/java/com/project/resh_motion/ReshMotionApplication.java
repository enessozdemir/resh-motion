package com.project.resh_motion;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication(exclude = SecurityAutoConfiguration.class)
public class ReshMotionApplication {

	public static void main(String[] args) {
		SpringApplication.run(ReshMotionApplication.class, args);
	}

}
