import React from "react";
import "./style.css";

export default function Features() {
  return (
    <div className="features">
      <div className="row">
        <div className="col-12 mb-3">
          <h4>Fun Features For You</h4>
        </div>
        <div className="col-12">
          <ul class="list-group">
            <li class="list-group-item px-4">
              <div className="row">
                <div className="col-8">
                  <strong>Contact Syncing</strong>
                </div>
                <div className="col-4">
                  <span>Sync Your Phonebook in a Jiffy</span>
                </div>
              </div>
            </li>
            <li class="list-group-item px-4">
              <div className="row">
                <div className="col-8">
                  <strong>Free Audio / Video Calls</strong>
                </div>
                <div className="col-4">
                  <span>Keep Enjoying Unlimited Free Calls</span>
                </div>
              </div>
            </li>
            <li class="list-group-item px-4">
              <div className="row">
                <div className="col-8">
                  <strong>Messaging</strong>
                </div>
                <div className="col-4">
                  <span>Get Your Message Delivered Anywhere, Anytime</span>
                </div>
              </div>
            </li>
            <li class="list-group-item px-4">
              <div className="row">
                <div className="col-8">
                  <strong>End-to-End Encryption</strong>
                </div>
                <div className="col-4">
                  <span>Your Conversations. For Your Eyes & Ears Only</span>
                </div>
              </div>
            </li>
            <li class="list-group-item px-4">
              <div className="row">
                <div className="col-8">
                  <strong>Group Chats</strong>
                </div>
                <div className="col-4">
                  <span>Group Your Friends & Chat Away</span>
                </div>
              </div>
            </li>
            <li class="list-group-item px-4">
              <div className="row">
                <div className="col-8">
                  <strong>High-Quality Media / File Sharing</strong>
                </div>
                <div className="col-4">
                  <span>Share Multimedia without Compromising on Quality</span>
                </div>
              </div>
            </li>
            <li class="list-group-item px-4">
              <div className="row">
                <div className="col-8">
                  <strong>Notifications</strong>
                </div>
                <div className="col-4">
                  <span>Remain Posted on Calls & Messages</span>
                </div>
              </div>
            </li>
            <li class="list-group-item px-4">
              <div className="row">
                <div className="col-8">
                  <strong>Location Sharing</strong>
                </div>
                <div className="col-4">
                  <span>Reaching You is Never a Problem</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
