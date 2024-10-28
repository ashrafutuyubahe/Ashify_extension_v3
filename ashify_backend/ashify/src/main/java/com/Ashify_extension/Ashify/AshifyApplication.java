package com.Ashify_extension.Ashify;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;


@SpringBootApplication(exclude = { SecurityAutoConfiguration.class})

public class AshifyApplication {

	public static void main(String[] args) {
		SpringApplication.run(AshifyApplication.class, args);
		System.out.println("***********************************appp***************************** \n");
		System.out.println("the application is running on tomcat server\n");
		System.out.println("****************************************************************");
		
		
	}




}
