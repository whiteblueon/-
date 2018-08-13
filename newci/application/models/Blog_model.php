<?php defined('BASEPATH') OR exit('No direct script access allowed');
	class Blog_model extends CI_Model{
		public function get_all(){
			$query = $this->db->get('blog');
			return $query->result();
		}
	}


?>