package projectLeague.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import projectLeague.dao.LeagueDao;
import projectLeague.model.League;

@RestController
@RequestMapping("/dc")
public class LeagueController {

	@Autowired
	private LeagueDao leagueDao;

	/**
	 * affiche un texte via l'url "http://localhost:8080/dc/title"
	 * 
	 * @return
	 */
	@GetMapping("/title")
	public String titre() {
		return ("Les différentes ligues dans l'univers DC Comics !");
	}

	/**
	 * recherche d'un objet dans la liste par son id via l'url
	 * "http://localhost:8080/dc/league?id=[]" si l'id n'existe pas, une page
	 * d'erreur s'affiche
	 * 
	 * @param id
	 * @return
	 */
	@GetMapping("/league")
	public ResponseEntity<League> getLeague(@RequestParam(value = "id") int id) {
		List<League> leagues = leagueDao.findById(id);
		for (League league : leagues) {
			return ResponseEntity.ok(league);
		}
		return ResponseEntity.notFound().build();
	}

	/**
	 * affiche la liste de tout les objets existants
	 * 
	 * @return
	 */
	@GetMapping("/leagues")
	public List<League> getAll() {
		return leagueDao.findAll();
	}

	/**
	 * creation d'un nouvel objet via l'url
	 * "http://localhost:8080/dc/newLeague?id=[]&nom=[]&nbMembre=[]" ou
	 * "http://localhost:8080/dc/newLeague?id=[]&nom=[]&nbMembre=[]&membres=[]&url=[]"
	 * ajout dans la liste
	 * 
	 * @param id
	 * @param nom
	 * @param nbMembre
	 * @param membres
	 * @param url
	 * @return
	 */
	@GetMapping("/newLeague")
	public List<League> createLeague(
			@RequestParam(value = "id") int id, @RequestParam(value = "nom") String nom,
			@RequestParam(value = "nbMembre") int nbMembre,
			@RequestParam(value = "membres", required = false) String membres,
			@RequestParam(value = "url", required = false) String url) {
		League newLeague = new League(id, nom, nbMembre, membres, url);
		leagueDao.addLeague(newLeague);
		return leagueDao.findAll();
	}

	@GetMapping("/updateLeague")
	public List<League> updateLeague(
			@RequestParam(value = "id") int id, 
			@RequestParam(value = "nom") String nom,
			@RequestParam(value = "nbMembre") int nbMembre,
			@RequestParam(value = "membres") String membres,
			@RequestParam(value = "url") String url) {
		League newLeague = new League(id, nom, nbMembre, membres, url);
		leagueDao.updateLeague(newLeague);
		return leagueDao.findAll();
	}

}
