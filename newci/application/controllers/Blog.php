<?php defined('BASEPATH') OR exit('No direct script access allowed');
	class Blog extends CI_Controller{
		public function __construct(){
			parent::__construct();
		}

		public function index(){
			//echo "index";
			$this->load->model('Blog_model');
			$rs=$this->Blog_model->get_all();
			$data['blogs']=$rs;
			$this->load->view('index.php',$data);
		}
	}


?>