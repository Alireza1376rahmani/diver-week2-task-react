import { setTimeout } from "timers";
import data from "./fakeDate";

const time = 1000;

export async function init() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(data.init);
		}, time);
	});
}

export async function get_header_info() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(data.get_header_info);
		}, time);
	});
}

export async function personal_data_tab() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(data.personal_data_tab);
		}, time);
	});
}

export async function personal_document_tab() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(data.personal_document_tab);
		}, time);
	});
}

export async function finantial_tab_basic_info() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(data.finantial_tab_basic_info);
		}, time);
	});
}
export async function finantial_tab_transactions_table() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(data.finantial_tab_transactions_table);
		}, time);
	});
}
export async function finantial_tab_bank_account_table() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(data.finantial_tab_bank_account_table);
		}, time);
	});
}
export async function works_todo() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(data.works_todo);
		}, time);
	});
}
export async function works_done() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(data.works_done);
		}, time);
	});
}
export async function work_condition_tab() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(data.work_condition_tab);
		}, time);
	});
}
