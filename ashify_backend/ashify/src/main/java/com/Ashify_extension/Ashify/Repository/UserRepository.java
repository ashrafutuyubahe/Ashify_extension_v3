package com.Ashify_extension.Ashify.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Ashify_extension.Ashify.Entity.User;

public interface UserRepository extends JpaRepository<User,Integer> {
   User FindUserByEmail(String userEmail);
}
