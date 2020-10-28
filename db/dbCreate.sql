DROP TABLE IF EXISTS incident_reports ;
CREATE TABLE incident_reports(

    report_id int auto_increment PRIMARY KEY,
    report_date text,

    -- Staff details --
    staff_name TEXT,
    staff_email TEXT,
    staff_phone TEXT,
    staff_experience TEXT,
    staff_shift_start TEXT,
    staff_work_arrangement TEXT,
    
	-- Incident details --
    incident_time text,
    incident_location text,
    incident_details text,
    SWMS_completed text,
    take5_completed text,
    fatigue_plan_completed text,
    site_procedures_followed text,
    incident_injury text,
    incident_equip_damage text,
    incident_near_miss text,
    incident_witnesses text,
    
    -- Injury Details --
    injury_nature text,
    injury_location text,
    injury_agency text,
    stopped_work text,
    treatment_received text,
    treatment_details text,
    
    -- Equipment Damage Details --
    equip_company text,
    equip_item text,
    equip_damage text,
    
    -- Incident investigation --
    causal_factors text,
    recurrence_liklihood text,
    outcome_severity text,
    resulting_risk text,
    actions_taken text,
    actions_implemented text,
    actions_implementer text,
    
    -- Review
    reviewer text,
    review_date text,
    isReviewed text
);