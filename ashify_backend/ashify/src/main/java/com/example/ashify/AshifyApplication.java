package com.example.ashify;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class AshifyApplication {

	public static void main(String[] args) {
		SpringApplication.run(AshifyApplication.class, args);
		getMovies();
	
	}

	public static void getMovies(){
		System.out.println("heee is  a  list of movies");
	}

}
