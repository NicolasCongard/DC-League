package projectLeague.dao;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Component;

import projectLeague.ProjectLeagueApplication;
import projectLeague.model.League;

@Component
@Qualifier("leagueDao")
public class LeagueDaoImpl implements LeagueDao {

	@Autowired
	private JdbcTemplate jdbcTemplate;

	/**
	 * methode qui recherche un objet selon son id
	 */
	@Override
	public List<League> findById(int id) {
		return jdbcTemplate.query("SELECT * FROM league WHERE id = ?", new Object[] { id }, new LeagueMapper());
	}
	
	/**
	 * methode qui affiche tout les objets de la liste
	 */
	@Override
	public List<League> findAll() {
		return jdbcTemplate.query("SELECT id, nom, nbMembre, membres, url FROM league", new LeagueMapper());
	}

	/**
	 * methode qui ajoute un objet dans la liste
	 */
	@Override
	public void addLeague(League league) {
		jdbcTemplate.update("INSERT INTO league (id, nom, nbMembre, membres, url) VALUES (?, ?, ?, ?, ?)", league.getId(), league.getNom(), league.getNbMembre(), league.getMembres(), league.getUrl());
	}
	
	@Override
	public void updateLeague(League league) {
		jdbcTemplate.update("UPDATE league set nom= ?, nbMembre = ?, membres = ?, url = ? WHERE id = ?", league.getNom(), league.getNbMembre(), league.getMembres(), league.getUrl(), league.getId());
	}
	
	@Override
	public void deleteLeague(League league) {
		jdbcTemplate.update("DELETE FROM league WHERE id = ?", league.getId());
	}

	/**
	 * 
	 * @author Nicolas Congard
	 *
	 */
	private static final class LeagueMapper implements RowMapper<League> {

		/**
		 * methode qui envoie les donnees vers la database
		 */
		public League mapRow(ResultSet resultSet, int rowNum) throws SQLException {
			
			League l = new League();
			l.setId(resultSet.getInt("id"));
			l.setNom(resultSet.getString("nom"));
			l.setNbMembre(resultSet.getInt("nbMembre"));
			l.setMembres(resultSet.getString("membres"));
			l.setUrl(resultSet.getString("url"));
			return l;
		}
	}
}
