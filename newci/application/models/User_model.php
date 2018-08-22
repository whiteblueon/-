<?php defined('BASEPATH') OR exit('No direct script access allowed');
	class User_model extends CI_Model{
		public function insert_data($uname,$pass){
			$data = array(
			    'uname' => $uname,
			    'pass' =>$mpass,
			);

			$query=$this->db->insert('user', $data);
			return $query;

			/*
			$sql="insert into user(uid,uname,pass) values(null,'$uname','$pass')";
			$query=$this->db->query($sql);
			return $query;*/
		}
		public function sel_data($uname,$mpass){

			$query = $this->db->get_where('user', array(
				'uname' => $uname,
				'pass'=>$mpass,
				));


			return $query->row();
		}
	}


?>