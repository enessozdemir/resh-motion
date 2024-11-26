package com.project.resh_motion;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")
@SpringBootApplication
public class ReshMotionApplication {

	public static void main(String[] args) {
		SpringApplication.run(ReshMotionApplication.class, args);
	}
}
