package projectLeague.model;

import java.io.Serializable;

public class League implements Serializable {
	private static final long serialVersionUID = 1L;

	private int id;
	private String nom;
	private int nbMembre;
	private String membres;
	private String url;

	public League() {
		super();
	}

	public League(int id, String nom, int nbMembre) {

		this.id = id;
		this.nom = nom;
		this.nbMembre = nbMembre;
	}

	public League(int id, String nom, int nbMembre, String membres, String url) {
		this.id = id;
		this.nom = nom;
		this.nbMembre = nbMembre;
		this.membres = membres;
		this.url = url;
	}

	public String getMembres() {
		return membres;
	}

	public void setMembres(String membres) {
		this.membres = membres;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getNom() {
		return nom;
	}

	public void setNom(String nom) {
		this.nom = nom;
	}

	public int getNbMembre() {
		return nbMembre;
	}

	public void setNbMembre(int nbMembre) {
		this.nbMembre = nbMembre;
	}
}
