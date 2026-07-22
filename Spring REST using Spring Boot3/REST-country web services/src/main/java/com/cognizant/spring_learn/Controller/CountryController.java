package com.cognizant.spring_learn.Controller;

import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.spring_learn.Country;

@RestController
public class CountryController {

    @RequestMapping("/country")
    public Country getCountryIndia() {

        try (ClassPathXmlApplicationContext context =
                     new ClassPathXmlApplicationContext("country.xml")) {

            return context.getBean("country", Country.class);
        }
    }
}