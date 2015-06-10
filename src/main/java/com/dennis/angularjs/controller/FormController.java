package com.dennis.angularjs.controller;

import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import org.apache.log4j.Logger;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/form.do")
public class FormController {

	private static final Logger log = Logger.getLogger(FormController.class);

	static class FormData {
		public String firstName;
		public String age;
		public String color;
	}
	
	static class Message {
		public String label;
		public Map<String, Object> parameters = new LinkedHashMap<String, Object>();
		
		Message() {}
		Message(String label) { this.label = label; }
		Message withParam(String key, Object val) { parameters.put(key, val); return this; }
	}

	@RequestMapping(method = RequestMethod.POST)
	@ResponseBody
	public ResponseEntity<?> postForm(@RequestBody FormData formData) {
		List<Message> messages = new ArrayList<Message>();
		messages.addAll(validateFirstName(formData.firstName));
		messages.addAll(validateAge(formData.age));
		log.debug("Teting..........");
		if (messages.isEmpty()) {
			System.out.println("Processing validated form.");
			System.out.println("First name: " + formData.firstName);
			System.out.println("Age: " + formData.age);
			return new ResponseEntity<String>("", HttpStatus.NO_CONTENT);
		} else {
			messages.add(0, new Message("INCORRECT_FIELDS").withParam("n", messages.size()));
			return new ResponseEntity<List<Message>>(messages, HttpStatus.BAD_REQUEST);
		}
	}

	private List<Message> validateFirstName(String firstName) {
		List<Message> messages = new ArrayList<Message>();
		if (firstName == null || firstName.isEmpty()) {
			messages.add(new Message("FIRST_NAME_REQUIRED"));
		} else if (firstName.length() < 3) {
			messages.add(new Message("FIRST_NAME_MINLENGTH").withParam("len", 3));
		} else if (firstName.length() > 20) {
			messages.add(new Message("FIRST_NAME_MAXLENGTH").withParam("len", 20));
		}
		return messages;
	}

	private List<Message> validateAge(String age) {
		List<Message> messages = new ArrayList<Message>();
		if (age == null || age.isEmpty()) {
			messages.add(new Message("AGE_REQUIRED"));
		} else {
			try {
				Integer ageInt = Integer.parseInt(age);
				if (ageInt < 0) {
					messages.add(new Message("AGE_NEGATIVE"));
				} else if (ageInt > 130) {
					messages.add(new Message("AGE_MAX").withParam("years", 130));
				}
			} catch (NumberFormatException nfe) {
				messages.add(new Message("AGE_INTEGER"));
			}
		}
		return messages;
	}
}
