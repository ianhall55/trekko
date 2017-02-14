# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170213215003) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "destinations", force: :cascade do |t|
    t.string   "name",       null: false
    t.float    "lat",        null: false
    t.float    "lng",        null: false
    t.integer  "ord",        null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer  "trip_id"
  end

  create_table "place_of_interests", force: :cascade do |t|
    t.string   "name",            null: false
    t.integer  "destination_id",  null: false
    t.string   "google_id"
    t.string   "photo_reference"
    t.string   "type"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.float    "lat"
    t.float    "lng"
    t.string   "address"
  end

  create_table "trips", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string   "name"
    t.float    "lat"
    t.float    "lng"
    t.datetime "date"
    t.json     "viewport"
  end

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "email",           null: false
    t.string   "password_digest"
    t.string   "session_token",   null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.string   "facebook_uid"
    t.string   "first_name"
    t.string   "last_name"
    t.string   "avatar_url"
  end

end
