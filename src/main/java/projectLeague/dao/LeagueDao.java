package projectLeague.dao;

import java.util.List;

import projectLeague.model.League;

public interface LeagueDao {

	public List<League> findById (int id);
	public List<League> findAll();
	public void addLeague(League League);
	public void updateLeague(League league);
}
