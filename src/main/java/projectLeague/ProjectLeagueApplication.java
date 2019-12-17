package projectLeague;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = { "projectLeague" })
public class ProjectLeagueApplication {

	public static void main(String[] args) {
		SpringApplication.run(ProjectLeagueApplication.class, args);
	}

}
